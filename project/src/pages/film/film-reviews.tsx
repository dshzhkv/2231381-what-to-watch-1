import FilmNav from './film-nav';
import {FilmInfo} from '../../types/FilmInfo';
import {FilmPageContentType} from './film';

function FilmReviews({filmInfo}: {filmInfo: FilmInfo}) {
  return (
    <div className="film-card__desc">
      <FilmNav activeItem={FilmPageContentType.Reviews} filmId={filmInfo.id}/>

      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {
            filmInfo.reviews.map((review) => (
              <div className="review" key={review.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{review.text}</p>

                  <footer className="review__details">
                    <cite className="review__author">{review.author}</cite>
                    <time className="review__date" dateTime={review.dateTimeNumeric}>{review.published}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{review.rating.toString()}</div>
              </div>))
          }
        </div>
      </div>
    </div>
  );
}

export default FilmReviews;
