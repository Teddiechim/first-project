import { useState } from "react";

export function TwitterFollowCard({
  userName,
  name,
  image,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing ? "isFollowingBtn" : "followBtn";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article>
      <header>
        <figure className="userImg">
          <img alt="El avatar de usuario" src={image} />
        </figure>
        <div className="userInf">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside className="userBtn">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="followText">{text}</span>
          <span className="stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
