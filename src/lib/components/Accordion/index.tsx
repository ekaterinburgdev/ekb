import { ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Switch } from '../Switch';
import { ICheckboxState } from '../../types/ICheckboxState';

type Gap = 0 | 8 | 16;

interface Props extends ICheckboxState {
  title: ReactNode;
  children: ReactNode;
  subTitle?: ReactNode;
  active?: boolean;
  verticalGap?: Gap;
  horizontalGap?: Gap;
}

const Wrapper = styled.label<{ $opened?: boolean }>`
  display: flex;
  font-size: 16px;
  line-height: 20px;
  gap: 4px;
  background-color: #1e2841;
  padding: 12px 16px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #040d24;
  }
  &:active {
    background-color: #141d34;
  }
  ${({ $opened }) =>
    $opened &&
    css`
      background-color: #141d34;
    `}
`;
const Content = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const Title = styled.span`
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const SubTitle = styled.span`
  color: #9baac3;
`;

const Postfix = styled.div`
  color: #9baac3;
`;

const Container = styled.div``;

const Body = styled.div<{
  $horizontalGap: Gap;
  $verticalGap: Gap;
}>`
  background-color: #141d34;
  padding: ${({ $horizontalGap, $verticalGap }) => css`
    ${$verticalGap}px
    ${$horizontalGap}px
    ${$verticalGap + 16}px
    ${$horizontalGap}px
  `};
`;

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  function AccordionItem(
    {
      title,
      subTitle,
      horizontalGap = 16,
      verticalGap = 8,
      children,
      toggle,
      isSelected,
    },
    ref,
  ) {
    return (
      <Container ref={ref}>
        <Wrapper $opened={isSelected}>
          <Content>
            <TitleWrapper>
              <Title>{title}</Title>
              {subTitle && <SubTitle>{subTitle}</SubTitle>}
            </TitleWrapper>
          </Content>
          <Postfix>
            <Switch isSelected={isSelected} toggle={toggle} />
          </Postfix>
        </Wrapper>
        {isSelected && children && (
          <Body $horizontalGap={horizontalGap} $verticalGap={verticalGap}>
            {children}
          </Body>
        )}
      </Container>
    );
  },
);

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 8px solid #1e2841;
  overflow: auto;

  ${Container}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${Container}:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
