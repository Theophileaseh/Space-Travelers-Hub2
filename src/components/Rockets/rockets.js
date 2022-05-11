import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketList } from '../../redux/rockets/reducers';

const Rockets = () => {
  const dispatchAction = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    dispatchAction(getRocketList());
  }, [dispatchAction]);

  return (
    rockets.map((rocket) => (
      <div key={rocket.id}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          img={rocket.img}
          desc={rocket.desc}
        />
      </div>
    ))
  );
};

export default Rockets;
