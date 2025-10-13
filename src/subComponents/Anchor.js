import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa'; // ✅ import a chain/link icon
import { Anchor } from '../Components/AllSvgs';

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-50%);

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffp = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffp}%)`;

      if (scrollPosition > 5) {
        hiddenRef.current.style.display = 'none';
      } else {
        hiddenRef.current.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef}>
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => (
          <FaLink
            key={id}
            size={25}
            color="currentColor"
            className="chain"
          />
        ))}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;