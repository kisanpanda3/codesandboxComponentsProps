function Avatar(props) {
  const { name, src, rounded } = props;
  const style = {
    borderRadius: "1rem"
  };
  if (rounded) {
    style.borderRadius = "50%";
  }
  return (
    <div>
      <img style={style} src={src} alt="icon" width="150px" />
      <h3>{name}</h3>
    </div>
  );
}
export default Avatar;
