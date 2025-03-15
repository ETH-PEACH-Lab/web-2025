import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import introMd from '!raw-loader!./data/intro.md';
import Teaser from '../public/assets/teaser.svg';
export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "0rem 0rem" }}>
      <Teaser style={{maxWidth: "600px" , marginTop: "-2rem"}} />
      <h1>Welcome to PEACH Lab</h1>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >
        {introMd}
      </ReactMarkdown>
      <div style={{ marginTop: "2rem" }}>
        <a href="/research" style={buttonStyle}>
          Check Our Work
        </a>
        <a href="/team" style={buttonStyle}>
          Meet the Team
        </a>
      </div>
    </div>
  );
}

// Simple inline button styling
const buttonStyle = {
  display: "inline-block",
  margin: "0 10px",
  padding: "12px 24px",
  backgroundColor: "#000",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "8px",
};
