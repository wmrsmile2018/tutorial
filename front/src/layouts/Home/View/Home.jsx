import { Header } from '../../../components/Header';
import { Logo } from '../../../components/Logo';
import { MarginGroup } from '../../../components/MarginGroup';
import { Footer } from '../../../components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ROUTING_CONSTANTS, NAVIGATION_CONSTANTS } from '../routing';
import './styles.scss';

export const Home = ({ navigate, curPath, goToHome }) => {
  return (
    <MarginGroup className='home' isColumn>
      <Header>
        <MarginGroup gap={15} className='home-logo' onClick={goToHome}>
          <Logo type={'sm'} />
          <p>Tutorial</p>
        </MarginGroup>
        <MarginGroup gap={15} className='home-navigator'>
          {NAVIGATION_CONSTANTS.map((nav) => {
            return (
              <span
                key={nav.name}
                className={`${curPath === nav.path ? 'active' : ''} `}
                onClick={() => navigate(nav.path)}
              >
                {nav.name}
              </span>
            );
          })}
        </MarginGroup>
      </Header>
      <MarginGroup className='home-content-wrapper'>
        <MarginGroup isColumn className='home-content'>
          <Routes>
            <Route index element={<div>home</div>} />
            {ROUTING_CONSTANTS.map((rout) => {
              const Component = rout.component;
              return (
                <Route
                  key={rout.name}
                  path={rout.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </MarginGroup>
      </MarginGroup>
      <Footer>Footer</Footer>
    </MarginGroup>
  );
};
