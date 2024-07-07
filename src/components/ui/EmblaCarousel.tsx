import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import LinkPreview from "./linkPreview"; // Use the custom link previewer

type PropType = {
  slides: (string | { url: string; type: "image" | "video" | "link" })[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const hasLinks = slides.some(
    (slide) => typeof slide !== "string" && slide.type === "link",
  );

  const hasSlides = slides.length > 1;

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {typeof slide !== "string" && slide.type === "image" ? (
                <img
                  src={slide.url}
                  alt={`slide-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "left",
                    borderRadius: "12px", // Same border radius as LinkPreview
                  }}
                />
              ) : typeof slide !== "string" && slide.type === "video" ? (
                <iframe
                  width="460"
                  height="300"
                  src={slide.url}
                  title={`slide-${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    borderRadius: "12px", // Same border radius as LinkPreview
                  }}
                ></iframe>
              ) : typeof slide !== "string" && slide.type === "link" ? (
                <LinkPreview url={slide.url} />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {hasSlides && hasLinks && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : "",
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
