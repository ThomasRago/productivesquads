const myContainer = ({ children }) => {
  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        {...children}
      </Container>
    </>
  );
};
export default myContainer;
