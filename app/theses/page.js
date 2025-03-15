import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import thesesMd from '!raw-loader!../data/theses.md';

export default function Theses() {
  return (
    <div>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >{thesesMd}</ReactMarkdown>
    </div>
  );
}