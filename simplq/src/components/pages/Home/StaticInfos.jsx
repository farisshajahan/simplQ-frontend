import React from 'react';
import { CreateQButton, JoinQButton } from '../../common/Button';
import Header from '../../common/Header';
import styles from '../../../styles/homePage.module.scss';

export const Banner = () => (
  <div>
    <Header className={styles['main-header']} text="SimplQ" />
    <h3 className={styles.center}>A long overdue alternative to physical Queues</h3>
  </div>
);

export const ButtonGroup = (props) => (
  <div className={styles['button-group']}>
    <div>
      <CreateQButton onClick={() => props.history.push('/create')} />
    </div>
    <div>
      <JoinQButton onClick={() => props.history.push('/join/')} />
    </div>
  </div>
);

export const BenefitsInfo = () => (
  <div className={styles['benefits-info']}>
    <div>
      <img src="/images/minimize_crowding.svg" alt="mimimze crowding" />
      <p>Minimize crowding by keeping your queue virtual</p>
    </div>
    <div>
      <img src="/images/enforce_social_dist.svg" alt="Enforce social distancing" />
      <p>Enforce social distancing effectively</p>
    </div>
    <div>
      <img src="/images/check_status.svg " alt="Check your current status" />
      <p>Check your current status in the queue</p>
    </div>
  </div>
);

export const HowToCreate = () => (
  <div className={styles['create-queue']}>
    <h2>Create a Queue at the click of a button</h2>
    <div>
      <img src="/images/queue_creation.svg" alt="Create Queue" />
      <div>
        <h3>Create Queue</h3>
        <p>Enter queue name and create a queue totally free of cost</p>
      </div>
    </div>
    <div>
      <h3>Share Queue</h3>
      <p>Share the queue to your users for them to join</p>
    </div>
    <div>
      <h3>Manage Queue</h3>
      <p>Manage your queue seamlessly and efficiently</p>
    </div>
  </div>
);

export const HowToJoin = () => (
  <div className={styles['join-queue']}>
    <h2>Join a queue without being there</h2>
    <div>
      <h3>Join Queue</h3>
      <p>Get queue link and join from anywhere</p>
    </div>
    <div>
      <h3>Wait for your turn</h3>
      <p>Get notified when your turn is up without physically being in the queue</p>
    </div>
    <div>
      <h3>Manage Queue</h3>
      <p>Manage your queue seamlessly and efficiently</p>
    </div>
  </div>
);

export const ExtraInfo = () => (
  <div className={styles['extra-info']}>
    <div>
      {/* <img></img> */}
      <p>Always free</p>
    </div>
    <div>
      {/* <img></img> */}
      <p>Data security</p>
    </div>
    <div>
      {/* <img></img> */}
      <p>Easy to use</p>
    </div>
  </div>
);
