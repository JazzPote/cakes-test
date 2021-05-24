import styles from './QuoteComment.module.scss';

const QuoteComment: React.FC = ({ children }) => {
  return <p className={styles.quote}>{children}</p>;
};

export default QuoteComment;
