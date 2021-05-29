import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Homepage = () => {
  const [username, setUsername] = useState<string>();
  const history = useHistory();

  const canGenerate = !!username && username.length > 0;

  const goToResults = () => {
    history.push(`/twitter/${username}`);
  };

  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='col-10 col-lg-6'>
        <h1>Orbit</h1>
        <span className='fs-3'>See who's in your twitter orbit</span>

        <div className='mt-4 mb-5 d-flex align-items-stretch w-100'>
          <div className='form-floating flex-fill'>
            <input
              className='form-control'
              id='twitter-username'
              placeholder='@somebody'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='form-label' htmlFor='twitter-username'>
              Twitter username
            </label>
          </div>
          <button
            className='btn btn-primary ms-2'
            type='button'
            onClick={goToResults}
            disabled={!canGenerate}>
            Create
          </button>
        </div>
      </div>

      <div className='mt-5 col-10 col-lg-6'>
        <h2>How does it work?</h2>
        <p>
          Orbit uses <strong>publicly available</strong> twitter data to
          determine who you interact with the most. That's why there's{' '}
          <strong>no need to log in</strong> or provide your password.
        </p>
        <p>
          It fetches a number of your most recent tweets and likes. Then, it
          counts the number of interactions you've had with each person and
          assigns them a score.
        </p>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th scope='col'>Interaction</th>
              <th scope='col'>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Like</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Retweet</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Quote tweet</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Mention</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <p>
          People are sorted into circles by their total scores, with higher
          scores closer to the inner circle.
        </p>
        <p>
          It's important to note that{' '}
          <strong>
            people who mention you or like your tweets are not counted
          </strong>
          . That information would require you to log in. Orbit only uses{' '}
          <strong>your</strong> tweets and likes.
        </p>
        <p>
          Orbit also <strong>can't see private (locked) accounts</strong>, so
          they won't appear in your circles.
        </p>
        <p>
          Once your data has loaded, you are free to adjust the layout by
          changing the number of circles, as well as how many people appear in
          each circle.
        </p>
        <p>
          Orbit was created by{' '}
          <a
            className='fw-bold'
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/olivvysaur'>
            @olivvysaur
          </a>{' '}
          out of frustration that other twitter circle generators weren't
          customisable.
        </p>
      </div>
    </div>
  );
};

Homepage.displayName = 'Homepage';
