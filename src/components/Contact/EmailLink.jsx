import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const emails = ['nayansethi30@gmail.com'];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay && savedCallback.current) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay, savedCallback]);
};

const EmailLink = ({ loopEmail }) => {
  const hold = 50;
  const delay = 50;

  const [emailIndex, setEmailIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useInterval(() => {
    setCharIndex((prevCharIndex) => prevCharIndex + 1);
    if (charIndex - hold >= emails[emailIndex].length) {
      setEmailIndex((prevEmailIndex) => (prevEmailIndex + 1) % emails.length);
      setCharIndex(0);
    }
    if (!loopEmail && emailIndex === emails.length - 1 && charIndex >= emails[emailIndex].length) {
      setIsActive(false);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(true)}
    >
      <a href={`mailto:${emails[emailIndex]}`}>
        <span>{emails[emailIndex].slice(0, charIndex)}</span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopEmail: false,
};

EmailLink.propTypes = {
  loopEmail: PropTypes.bool,
};

export default EmailLink;
