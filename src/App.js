import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
import "./styles.css";

const users = [
  {
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/101393393?v=4",
    name: "Kisan",
    rounded: true
  },
  {
    id: 2,
    avatar_url: "https://avatars3.githubusercontent.com/u/12158859?v=4",
    name: "Albert",
    rounded: false
  }
];

const usersAvatar = users.map((user) => (
  <Avatar
    key={user.id}
    src={user.avatar_url}
    name={user.name}
    rounded={user.rounded}
  />
));

export default function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      {usersAvatar}
      <Button text="Clicked Me!" onClick={() => alert("1")} />
      <Button text="Clicked Me!2" onClick={() => alert("2")} />
    </div>
  );
}
