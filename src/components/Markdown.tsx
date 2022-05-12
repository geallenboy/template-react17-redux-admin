import { Divider, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

const MarkdownWrapperStyle = styled('div')(({ theme }: any) => {
  const isLight = theme.palette.mode === 'light';

  return {
    '& ul, & ol': {
      ...theme.typography.body1,
      paddingLeft: theme.spacing(5),
      '& li': {
        lineHeight: 2
      }
    },
    '& blockquote': {
      lineHeight: 1.5,
      fontSize: '1.5em',
      margin: '40px auto',
      position: 'relative',
      fontFamily: 'Georgia, serif',
      padding: theme.spacing(3, 3, 3, 8),
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor: theme.palette.background.neutral,
      color: `${theme.palette.text.secondary} !important`,
      [theme.breakpoints.up('md')]: {
        width: '80%'
      },
      '& p, & span': {
        marginBottom: '0 !important',
        fontSize: 'inherit !important',
        fontFamily: 'Georgia, serif !important',
        color: `${theme.palette.text.secondary} !important`
      },
      '&:before': {
        left: 16,
        top: -8,
        display: 'block',
        fontSize: '3em',
        content: '"\\201C"',
        position: 'absolute',
        color: theme.palette.text.disabled
      }
    },

    '& pre, & pre > code': {
      fontSize: 16,
      overflowX: 'auto',
      whiteSpace: 'pre',
      padding: theme.spacing(2),
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[isLight ? 900 : 500_16]
    },
    '& code': {
      fontSize: 14,
      borderRadius: 4,
      whiteSpace: 'pre',
      padding: theme.spacing(0.2, 0.5),
      color: theme.palette.warning[isLight ? 'darker' : 'lighter'],
      backgroundColor: theme.palette.warning[isLight ? 'lighter' : 'darker'],
      '&.hljs': { padding: 0, backgroundColor: 'transparent' }
    }
  };
});

const components = {
  h1: ({ ...props }) => <Typography variant="h1" {...props} />,
  h2: ({ ...props }) => <Typography variant="h2" {...props} />,
  h3: ({ ...props }) => <Typography variant="h3" {...props} />,
  h4: ({ ...props }) => <Typography variant="h4" {...props} />,
  h5: ({ ...props }) => <Typography variant="h5" {...props} />,
  h6: ({ ...props }) => <Typography variant="h6" {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  a: ({ ...props }) => {
    const { href } = props;
    return !href.includes('http') ? (
      <Link {...props} />
    ) : (
      <Link target="_blank" rel="nofollow noreferrer noopener" {...props} />
    );
  }
};

export default function Markdown({ ...other }: any) {
  return (
    <MarkdownWrapperStyle>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={components}
        {...other}
      />
    </MarkdownWrapperStyle>
  );
}
