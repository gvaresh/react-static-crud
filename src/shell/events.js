const Btn = () => {
  const shoot = (e, x) => {
    alert(x + "Great Shot! --" + e);
  };

  return (
    <>
      <button
        onClick={e => {
          shoot(e, "set go");
        }}
      >
        Take the Shot!
      </button>
    </>
  );
};

export default Btn;
