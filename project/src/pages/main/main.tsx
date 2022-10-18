import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {SmallFilmCardProps} from '../../components/small-film-card/small-film-card';

export type MainPageProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  promoFilmPosterImgSrc: string;
  promoFilmBackgroundImgSrc: string;
}

function Main(props: MainPageProps): JSX.Element {

  const genres: string[] = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

  const films: SmallFilmCardProps[] = [
    {posterImgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      filmName: 'Fantastic Beasts: The Crimes of Grindelwald'},
    {posterImgSrc: 'img/bohemian-rhapsody.jpg',
      filmName: 'Bohemian Rhapsody'},
    {posterImgSrc:'img/macbeth.jpg',
      filmName:'Macbeth'},
    {posterImgSrc:'img/aviator.jpg',
      filmName:'Aviator'},
    {posterImgSrc:'img/we-need-to-talk-about-kevin.jpg',
      filmName:'We need to talk about Kevin'},
    {posterImgSrc:'img/what-we-do-in-the-shadows.jpg',
      filmName:'What We Do in the Shadows'},
    {posterImgSrc:'img/revenant.jpg',
      filmName:'Revenant'},
    {posterImgSrc:'img/johnny-english.jpg',
      filmName:'Johnny English'},
    {posterImgSrc:'img/shutter-island.jpg',
      filmName:'Shutter Island'},
    {posterImgSrc:'img/pulp-fiction.jpg',
      filmName:'Pulp Fiction'},
    {posterImgSrc:'img/no-country-for-old-men.jpg',
      filmName:'No Country for Old Men'},
    {posterImgSrc:'img/snatch.jpg',
      filmName:'Snatch'},
    {posterImgSrc:'img/moonrise-kingdom.jpg',
      filmName:'Moonrise Kingdom'},
    {posterImgSrc:'img/seven-years-in-tibet.jpg',
      filmName:'Seven Years in Tibet'},
    {posterImgSrc:'img/midnight-special.jpg',
      filmName:'Midnight Special'},
    {posterImgSrc:'img/war-of-the-worlds.jpg',
      filmName:'War of the Worlds'},
    {posterImgSrc:'img/dardjeeling-limited.jpg',
      filmName:'Dardjeeling Limited'},
    {posterImgSrc:'img/orlando.jpg',
      filmName:'Orlando'},
    {posterImgSrc:'img/mindhunter.jpg',
      filmName:'Mindhunter'},
    {posterImgSrc:'img/midnight-special.jpg',
      filmName:'Midnight Special'},
  ];

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.promoFilmBackgroundImgSrc} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.promoFilmPosterImgSrc} alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promoFilmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promoFilmGenre}</span>
                <span className="film-card__year">{props.promoFilmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              genres.map((genre) => (
                genre === 'All genres' ?
                  <li className="catalog__genres-item catalog__genres-item--active">
                    <a href="#" className="catalog__genres-link">{genre}</a>
                  </li> :
                  <li className="catalog__genres-item">
                    <a href="#" className="catalog__genres-link">{genre}</a>
                  </li>
              ))
            }
          </ul>

          <div className="catalog__films-list">
            {
              films.map((filmCardProps) => (
                <SmallFilmCard key={filmCardProps.filmName}
                  posterImgSrc={filmCardProps.posterImgSrc}
                  filmName={filmCardProps.filmName}
                />))
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;