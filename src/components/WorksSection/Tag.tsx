import styled from 'styled-components';
import createTheme from '@charcoal-ui/styled';

const theme = createTheme(styled);

const Tag = styled.div`
  border: var(--border1);

  ${theme((o) => [
    o.typography(16),
    o.padding.vertical(4),
    o.padding.horizontal(8),
    o.borderRadius(4),
  ])}
`;

export default Tag;
