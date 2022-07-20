import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositorio</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem repository={repository} key={repository.name} />
        ))}
      </ul>
    </section>
  );
}
