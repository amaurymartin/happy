import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';

import { FiPlus } from 'react-icons/fi';

import { MapContainer, TileLayer } from 'react-leaflet';

import Sidebar from '../../../components/sidebar';
import MapMarker from '../../../components/map/marker';

import Schedule from '../../../types/entities/orphanage/schedule';

import api from '../../../services/api';

import './styles.css';

const OrphanageNew: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    NaN,
    NaN,
  ]);
  const [formData, setFormData] = useState({
    name: null,
    nickname: null,
    about: null,
    instructions: null,
    street: null,
    number: null,
    complement: null,
    zipCode: null,
    city: null,
    state: null,
    country: null,
    images: null,
  });
  const [schedules, setSchedules] = useState<Schedule[]>([
    { weekDay: 0, startsAt: '', endsAt: '' },
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  function coordsLoaded() {
    return (
      !Number.isNaN(currentPosition[0]) && !Number.isNaN(currentPosition[1])
    );
  }

  function fillForm(event: ChangeEvent<HTMLElement>) {
    if (event.target.nodeName === 'INPUT') {
      const inputEvent = event as ChangeEvent<HTMLInputElement>;
      const { name, value } = inputEvent.target;
      setFormData({ ...formData, [name]: value });
    } else if (event.target.nodeName === 'TEXTAREA') {
      const selectEvent = event as ChangeEvent<HTMLTextAreaElement>;
      const { name, value } = selectEvent.target;
      setFormData({ ...formData, [name]: value });
    }
  }

  function addSchedule() {
    setSchedules([
      ...schedules,
      {
        weekDay: 0,
        startsAt: '',
        endsAt: '',
      },
    ]);
  }

  function fillScheduleData(event: ChangeEvent<HTMLElement>, position: number) {
    const selectEvent = event as ChangeEvent<HTMLSelectElement>;
    const { name, value } = selectEvent.target;
    const newSchedule = schedules.map((item, index) => {
      if (index === position) return { ...item, [name]: value };

      return item;
    });

    setSchedules(newSchedule);
  }

  async function createOrphanage(event: FormEvent) {
    event.preventDefault();

    const {
      name,
      nickname,
      about,
      instructions,
      street,
      number,
      complement,
      zipCode,
      city,
      state,
      country,
      images,
    } = formData;

    const payload = {
      orphanage: {
        name,
        nickname,
        about,
        instructions,
        address: {
          latitude: currentPosition[0],
          longitude: currentPosition[1],
          street,
          number,
          complement,
          zipCode,
          city,
          state,
          country,
        },
        schedules,
      },
    };

    // eslint-disable-next-line no-unreachable
    let orphanageKey;
    await api
      .post('orphanages', payload)
      .then((response) => {
        orphanageKey = response.data.key;
        // eslint-disable-next-line no-alert
        alert('Orphanage created');
      })
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-alert
        alert('Error on creating orphanage. Check your data and try again');
      });

    const imagesPayload = new FormData();
    imagesPayload.append('images', images!);

    await api
      .post(`orphanages/${orphanageKey}/images`, imagesPayload)
      // eslint-disable-next-line no-alert
      .then(() => alert('Orphanage images uploaded'))
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-alert
        alert('Error on uploading orphanage images. Please try again');
      });
  }

  return (
    <div id="orphanage-new">
      <Sidebar />

      <main>
        <form className="orphanage-new-form" onSubmit={createOrphanage}>
          <fieldset>
            <legend>Infos</legend>
            <div className="input-block">
              <label htmlFor="name">
                Name
                <input id="name" name="name" onChange={fillForm} />
              </label>
            </div>

            <div className="input-block">
              <label htmlFor="about">
                About
                <span>300 characters maximum</span>
                <textarea
                  id="about"
                  name="about"
                  maxLength={300}
                  onChange={fillForm}
                />
              </label>
            </div>

            <div className="input-block">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="images">Images</label>

              <div className="images-container" />
              <button type="button" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Address</legend>
            {coordsLoaded() ? (
              <MapContainer
                center={currentPosition}
                style={{ width: '100%', height: 280 }}
                zoom={15}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker
                  currentPosition={currentPosition}
                  setCurrentPosition={setCurrentPosition}
                />
              </MapContainer>
            ) : (
              <h1>LOADING MAP</h1>
            )}

            <div className="input-block">
              <label htmlFor="street">
                Street
                <input id="street" name="street" onChange={fillForm} />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="number">
                Number
                <input id="number" name="number" onChange={fillForm} />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="complement">
                Complement
                <input id="complement" name="complement" onChange={fillForm} />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="zipCode">
                Zip Code
                <input id="zipCode" name="zipCode" onChange={fillForm} />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="city">
                City
                <input id="city" name="city" onChange={fillForm} />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="state">
                State
                <input id="state" name="state" onChange={fillForm} />
              </label>
            </div>
            <div className="input-block">
              <label htmlFor="country">
                Country
                <input id="country" name="country" onChange={fillForm} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visiting</legend>

            <div className="input-block">
              <label htmlFor="instructions">
                Instructions
                <textarea
                  id="instructions"
                  name="instructions"
                  onChange={fillForm}
                />
              </label>
            </div>

            <button type="button" onClick={addSchedule}>
              <FiPlus size={24} color="#15b6d6" />
              Add schedule
            </button>

            {schedules.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="schedule">
                <div className="select-block">
                  <label htmlFor="weekDay">
                    Week Day
                    <select
                      name="weekDay"
                      defaultValue=""
                      onChange={(event) => fillScheduleData(event, index)}
                    >
                      <option value="" disabled hidden>
                        Select the best day for you
                      </option>
                      {[
                        { value: '0', label: 'Sunday' },
                        { value: '1', label: 'Monday' },
                        { value: '2', label: 'Tuesday' },
                        { value: '3', label: 'Wednesday' },
                        { value: '4', label: 'Thursday' },
                        { value: '5', label: 'Friday' },
                        { value: '6', label: 'Saturday' },
                      ].map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="input-block">
                  <label htmlFor="startsAt">
                    Start
                    <input
                      type="time"
                      name="startsAt"
                      onChange={(event) => fillScheduleData(event, index)}
                    />
                  </label>
                </div>
                <div className="input-block">
                  <label htmlFor="endsAt">
                    End
                    <input
                      type="time"
                      name="endsAt"
                      onChange={(event) => fillScheduleData(event, index)}
                    />
                  </label>
                </div>
              </div>
            ))}
          </fieldset>

          <button type="submit" className="submit">
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default OrphanageNew;
