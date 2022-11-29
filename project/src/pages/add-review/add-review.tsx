import {Link, Navigate} from 'react-router-dom';
import Header from '../../components/header/header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import {useFilmId} from '../../hooks/useFilmId';
import {AppRoute} from '../../const';

function AddReview(): JSX.Element {

  const film = useFilmId();

  return ( film ?
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBackground backgroundImgSrc={film.backgroundImage} filmName={film.name}/>

        <Header className=''>
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
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm/>
    </section> : <Navigate to={AppRoute.Page404}/>
  );
}

export default AddReview;
