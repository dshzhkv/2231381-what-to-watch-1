import {FilmInfo} from '../../types/FilmInfo';
import {Link, Navigate} from 'react-router-dom';
import Header from '../../components/header/header';
import {AuthStatus} from '../../types/AuthStatus';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import {useFilmId} from '../../hooks/useFilmId';
import {AppRoute} from '../../const';

type AddReviewProps = {
  films: FilmInfo[];
  isAuthorised: AuthStatus;
}

function AddReview(props: AddReviewProps): JSX.Element {

  const film = useFilmId(props.films);

  return ( film ?
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBackground backgroundImgSrc={film.backgroundImgSrc} filmName={film.name}/>

        <Header isAuthorised={props.isAuthorised} className=''>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}/review`}>Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImgSrc} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm/>
    </section> : <Navigate to={AppRoute.Page404}/>
  );
}

export default AddReview;
