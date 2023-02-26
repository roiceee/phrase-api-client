import { useCallback, useEffect, useRef, useState } from "react";
import data from "../assets/static-data/quotes.json";
import styles from "../assets/styles/scss/transitions.module.scss"
import Container from "react-bootstrap/Container"

interface QuoteStateInterface {
  author: string;
  quote: string;
}

interface QuoteProps {
  className: string;
}

function Quotes({className}: QuoteProps) {
  const [quote, setQuote] = useState<QuoteStateInterface>({
    author: "",
    quote: "",
  });
  let [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const quoteRef = useRef<HTMLDivElement>(null);
  const INTERVALMS: number = 12000;
  const FadeOutBeforeQuoteRefresh: number = INTERVALMS - 1000;

  const fadeOutHandler = useCallback(() => {
    const quoteElement = quoteRef.current;
    if (quoteElement === null) {
      return;
    }
    if (quoteElement.classList.contains(styles.fadeIn)) {
      quoteElement.classList.remove(styles.fadeIn);
    }
    quoteElement.classList.add(styles.fadeOut);
  }, []);

  const fadeInHandler = useCallback(() => {
    const quoteElement = quoteRef.current;
    if (quoteElement === null) {
      return;
    }
    if (quoteElement.classList.contains(styles.fadeOut)) {
      quoteElement.classList.remove(styles.fadeOut);
    }
    quoteElement.classList.add(styles.fadeIn);
  }, []);

  const loadQuote = useCallback(() => {
    const RANDOMNUMBER = Math.floor(Math.random() * data.quotes.length);
    setQuote(data.quotes[RANDOMNUMBER]);
  }, []);

  const loadQuoteWithEffects = useCallback(() => {
    fadeInHandler();
    loadQuote();
    setTimeout(() => {
      fadeOutHandler();
    }, FadeOutBeforeQuoteRefresh);
  }, [fadeInHandler, fadeOutHandler, loadQuote, FadeOutBeforeQuoteRefresh]);

  useEffect(() => {
    if (!hasLoaded) {
      loadQuoteWithEffects();
      setHasLoaded(true);
      return;
    }
    setInterval(() => {
      loadQuoteWithEffects();
    }, INTERVALMS);
  }, [loadQuoteWithEffects, hasLoaded]);

  return (
    <Container className="px-5 text-center">
    <div
      className={`d-flex flex-column ${className}`}
      ref={quoteRef}
    >
      <h3><i>&quot;{quote.quote}&quot;</i></h3>
      <h5><i>- {quote.author}</i></h5>
    </div>
    </Container>
  );
}

export default Quotes;
