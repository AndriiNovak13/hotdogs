import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {addHotdog, updateHotdog, deleteHotdog} from './redux/actions/HotDogActions';

import Header from './components/Header';
import HotdogItem from './components/HotdogsPages/HotdogItem';


const App = () => {
  const dispatch = useDispatch();

  const hotDogs = useSelector(({HotDog})=>HotDog.hotdogs);

  const onAddHotdog = (obj) => {
    dispatch(addHotdog(obj))
  }
  const onUpdateHotdog = (obj, id) => {
    dispatch(updateHotdog(obj,id))
  }
  const onDeleteHotdog = (id) => {
    dispatch(deleteHotdog(id))
  }

  return (
    <div className="wrapper">

        <Header
          onAddHotdog={onAddHotdog}
        />

        <section className="hotdogs">
            <div className="container">
                <div className="hotdogs__main-title">
                    All hot-dogs
                </div>
                <div className="hotdogs__box">

                {
                  hotDogs && hotDogs.map((hotdog, index) =>(
                    <HotdogItem
                      key={hotdog.id}
                      hotdog={hotdog}
                      onUpdateHotdog={onUpdateHotdog}
                      index={index}
                      onDeleteHotdog={onDeleteHotdog}
                    />
                  ))
                }
                </div>
            </div>
        </section>



    </div>
  );
}

export default App;
