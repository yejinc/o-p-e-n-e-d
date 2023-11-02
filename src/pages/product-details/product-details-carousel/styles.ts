import styled from 'styled-components'

import { flexbox, lineClamp, textStyle, media } from '../../../styles/utils'

export const StyledProductDetailsCarouselHeader = styled.div`
  .product-details-carousel-header-wrapper {
    ${flexbox()};
    padding: 32px 0;
    width: 100%;

    .carousel-header-nav-left,
    .carousel-header-nav-right {
      ${flexbox()};
      width: 24px;

      svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .carousel-header-nav-left {
      transform: rotate(180deg);
    }

    .carousel-header-title {
      ${textStyle('md')};
      ${lineClamp(2)};
      font-weight: 500;
      text-align: center;
      color: ${({ theme }) => theme.colors.bodyText};
    }
  }

  ${media.greaterThan(
    'tablet'
  )`.product-details-carousel-header-wrapper {justify-content: space-between;}`}
`

export const StyledProductDetailsCarousel = styled.section``

export const StyledProductDetailsCarouselContent = styled.div``
