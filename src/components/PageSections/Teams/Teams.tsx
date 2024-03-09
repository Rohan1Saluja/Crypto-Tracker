import { Text } from "../../UI/Text";
import "./Teams.scss";

export const Teams: React.FC = () => {
  return (
    <div className="teams">
      <div className="header">
        <Text text="Teams" className="sub-heading" />
        <div className="intro">
          <Text
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quas commodi pariatur, est voluptates eum, quia natus aut autem dolorem eaque laborum ratione optio. 
            Magnam animi unde aut, quasi laboriosam mollitia."
            className="description-mid shorter-line-height"
          />
        </div>
        <div className="profile-card">
          <div className="image-card">
            <div className="profile-image p1"></div>
            <Text text="John Smith" className="description-small bold" />
            <Text text="Designation Here" className="description-extra-small" />
          </div>
          <div className="description">
            <Text
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              natus modi, unde dolorem voluptatibus nostrum adipisci esse earum,
              ipsa, pariatur sint vitae ea porro culpa harum placeat totam a
              veniam? Similique, quos aut? Sint, suscipit esse? Assumenda deserunt
              numquam sapiente dicta, sunt enim temporibus quas? Esse, sequi
              officia? Nihil, vel nisi architecto beatae fugit sapiente."
              className="description-small shorter-line-height"
            />
          </div>
        </div>
        <div className="profile-card">
          <div className="image-card">
            <div className="profile-image p2"></div>
            <Text text="Elina Williams" className="description-small bold" />
            <Text text="Designation Here" className="description-extra-small" />
          </div>
          <div className="description">
            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              perferendis maiores aut, alias ab doloribus ullam nostrum quibusdam
              libero. Molestias necessitatibus nesciunt, nulla facere ducimus
              atque delectus. Assumenda minus explicabo asperiores culpa
              perferendis tempora, rerum eligendi facere porro, repudiandae
              corrupti excepturi deleniti delectus laudantium at, pariatur
              dolores? Saepe ad aperiam recusandae, consectetur vel. 
              Fugiat ad excepturi praesentium ullam eligendi. 
              Aspernatur molestias at et odit sequi!"
              className="description-small shorter-line-height"
            />
          </div>
        </div>
        <div className="profile-card">
          <div className="image-card">
            <div className="profile-image p3"></div>
            <Text text="Jeremy Sharma" className="description-small bold" />
            <Text text="Designation Here" className="description-extra-small" />
          </div>
          <div className="description">
            <Text
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque in
              error praesentium sit aut quibusdam molestias delectus ullam non
              beatae. Perferendis voluptatibus praesentium tempora totam
              exercitationem? Quae assumenda et totam inventore praesentium odio,
              error nisi maiores placeat qui animi voluptatibus nemo quaerat
              debitis recusandae libero autem. Doloremque repudiandae a aspernatur
              neque est ullam iste minima quidem eveniet hic, vero dolores?"
              className="description-small shorter-line-height"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
