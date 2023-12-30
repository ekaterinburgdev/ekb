import { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';
import { AnimatedLogo } from '../AnimatedLogo';

type DividerCardBlock = { type: 'divider' };
type ValueCardBlock = { type: 'value'; title?: string; value: ReactNode };
type SectionCardBlock = { type: 'section'; title?: string; value: ReactNode };

export type CardBlock = DividerCardBlock | ValueCardBlock | SectionCardBlock;

export interface CardProps {
  cover?: ReactNode;
  actions?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  additionalInfo?: string[];
  blocks?: CardBlock[];
  footerActions?: ReactNode;

  loading?: boolean;
}

const Wrapper = styled.div`
  padding: 16px;
`;
const Header = styled.div``;
const Cover = styled.div`
  margin-bottom: 8px;
  img {
    display: block;
    width: 100%;
    height: auto;
    min-height: 100px;
    background-color: #2e2e2e;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    object-fit: contain;
    object-position: top center;
  }
`;
const Actions = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  margin-bottom: 8px;
`;
const AdditionalInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #9baac3;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const AdditionalInfoItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #9baac3;
`;
const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardBlockItem = styled.div``;
const CardBlockTitle = styled.div`
  color: #9baac3;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;
const CardBlockValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const CardSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CardSectionTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
const CardSectionValue = styled.div``;

function CardBlock({ block }: { block: CardBlock }) {
  switch (block.type) {
    case 'divider':
      return <Divider verticalGap={8} />;
    case 'value':
      return (
        <CardBlockItem>
          {block.title && <CardBlockTitle>{block.title}</CardBlockTitle>}
          <CardBlockValue>{block.value}</CardBlockValue>
        </CardBlockItem>
      );
    case 'section':
      return (
        <CardSectionItem>
          {block.title && <CardSectionTitle>{block.title}</CardSectionTitle>}
          <CardSectionValue>{block.value}</CardSectionValue>
        </CardSectionItem>
      );
    default:
      return null;
  }
}

const FooterActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    cover,
    actions,
    title,
    description,
    additionalInfo = [],
    blocks = [],
    footerActions,
    loading,
  },
  ref,
) {
  if (loading) {
    return (
      <Wrapper>
        <AnimatedLogo color="rgba(0, 0, 0, 0)" radius="180px" />
      </Wrapper>
    );
  }

  return (
    <Wrapper ref={ref}>
      <Header>
        {cover && <Cover children={cover} />}
        {actions && <Actions>{actions}</Actions>}
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {additionalInfo.length > 0 && (
          <AdditionalInfo>
            {additionalInfo.map((info, i) => (
              <AdditionalInfoItem key={i}>{info}</AdditionalInfoItem>
            ))}
          </AdditionalInfo>
        )}
      </Header>
      <Divider />
      {blocks.length > 0 && (
        <Blocks>
          {blocks.map((block, i) => (
            <CardBlock key={i} block={block} />
          ))}
        </Blocks>
      )}
      {footerActions && (
        <>
          <Divider />
          <FooterActions>{footerActions}</FooterActions>
        </>
      )}
    </Wrapper>
  );
});
