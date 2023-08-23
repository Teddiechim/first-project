import { TwitterFollowCard } from "./twitterFollowCard";
import "./index.css";

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard
        initialIsFollowing={true}
        userName="miguelAd"
        name="Miguel Ángel Agudelo"
        image="cat1.jpg"
      />
      <TwitterFollowCard
        userName="EdSolis"
        name="Eduardo Solis"
        image="cat1.jpg"
      />
    </div>
  );
}
