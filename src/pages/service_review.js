/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { useParams } from 'react-router-dom';

import ServiceReview from 'containers/ServiceReview';
import Page from 'components/layouts/Page';
import PageLoader from 'components/Loader/PageLoader';

function Review({ backend }) {
  const params = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    backend.getServiceRequest(params.id).then((response) => {
      setService(response);
      setIsLoading(false);
    });
  }, [params.id, backend]);

  return (
    <Page currentProgress={5} totalProgress={5}>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <ServiceReview backend={backend} id={params.id} service={service} />
      )}
    </Page>
  );
}

export default Review;