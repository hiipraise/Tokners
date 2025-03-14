import ToknerLogo from "../../assets/icon/toknerlogo";
import "./article.css";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div className="toknercoming">
      <h5>
        <ToknerLogo /> Tokner is coming
      </h5>
      <p>
        <b>
          Cryptocurrency adoption is at less than 1% of the global world
          population with some countries and entities actively fighting against
          its mass adoption and the smartest developers and nerds holding the
          fort.
        </b>
        <br />
        <br />
        Bitcoin was the first, and it has since grown to thousands of tokens
        launched all aiming to fix one problem or the other with some quite
        simply FOMOing the moment. Our goal is to bring mass adoption to the
        cryptocurrency space by dumbing it down. How far down? So down that even
        a celebrity can explain it in simple words to their followers and have
        them download an app, buy into the social currency of their favourite
        person and watch their investment as is with other crypto currency
        project. <br />
        <br />
        We are trying to do to this space what investment apps did for the
        nonexistent retail investors. We are gamefying digital currency,
        bringing in popular faces instead of hard to understand projects to make
        it the norm and inadvertently being the gateway drug for a lot of people
        to finally give this space a real look.
        <br />
        <br />
        <b>
          A new digital economy is coming. People would be just as powerful as
          countries and creators would be paid beyond the peanuts that
          conventional social media platforms can offer.
        </b>
        <br />
        <br />
        There would be new markets and advertisers with little to offer would
        not find home there. Like Kanye said,
        <br />
        <br />
        <b>
          <em>
            &quot;Personalities would become the new currency, and services
            would be built on top of them&quot;.
          </em>
        </b>
        <br />
        <br />
        Well, Kanye did not exactly say that, but it sounds like something we
        hope he would say.
        <br />
        <br />
        Currency is digital, it has been that way for a while now, but this time
        there would be no dead presidents on the money, there would people like
        you on the money, and you would own it because it would make the most
        sense in the world.
      </p>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default Article;
