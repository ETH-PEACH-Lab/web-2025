import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import teachingMd from '!raw-loader!../data/teaching.md';

export default function Teaching() {
  return (
    <div>
      <h2>Teaching</h2>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >{teachingMd}</ReactMarkdown>
    </div>
  );
}