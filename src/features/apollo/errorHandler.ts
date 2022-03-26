import { fromPromise } from '@apollo/client';
import type { ErrorResponse } from '@apollo/client/link/error';
import client from './client';
import { MUTATION_REFRESH_TOKEN } from '../user/queries';

function errorHandler({ graphQLErrors, operation, forward }: ErrorResponse) {
  if (operation.operationName === 'RefreshToken') {
    return;
  }

  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          return fromPromise(
            client.mutate({
              mutation: MUTATION_REFRESH_TOKEN,
            }),
          )
            .filter((value) => Boolean(value))
            .flatMap(() => forward(operation));
      }
    }
  }
}

export default errorHandler;
