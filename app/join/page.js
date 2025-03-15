import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import joinMd from '!raw-loader!../data/join.md';

export default function Join() {
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
      >{joinMd}</ReactMarkdown>
    </div>
  );
}