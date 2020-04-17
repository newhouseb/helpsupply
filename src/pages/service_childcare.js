/** @jsx jsx */
import { jsx } from '@emotion/core';

import Page from 'components/layouts/Page';
import ChildcareFormLocation from 'containers/ChildcareFormLocation';
import ChildcareFormDate from 'containers/ChildcareFormDate';
import ChildcareFormDetails from 'containers/ChildcareFormDetails';
import ChildcareFormOptions from 'containers/ChildcareFormOptions';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ServiceChildcare({ backend, step }) {
  const [request, setRequest] = useState(request);
  const params = useParams();
  const updateService = (request) => {
    backend.updateServiceRequest(params.id, request, true);
  };

  useEffect(() => {
    if (!params.id) return;
    backend.getServiceRequest(params.id).then((data) => {
      setRequest(data);
    });
  }, []);

  if (params.id && !request) {
    // loading
    return null;
  }
  return (
    <Page currentProgress={4} totalProgress={5}>
      {step === 1 && (
        <ChildcareFormLocation
          request={request}
          onSave={updateService}
          id={params.id}
        />
      )}
      {step === 2 && (
        <ChildcareFormDate
          request={request}
          onSave={updateService}
          id={params.id}
        />
      )}
      {step === 3 && (
        <ChildcareFormDetails
          request={request}
          onSave={updateService}
          id={params.id}
        />
      )}
      {step === 4 && (
        <ChildcareFormOptions
          request={request}
          onSave={updateService}
          id={params.id}
        />
      )}
    </Page>
  );
}

export default ServiceChildcare;
