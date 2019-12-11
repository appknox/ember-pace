import Pace from 'pace-progressbar'

export function initialize(application) {
  const config = application.resolveRegistration('config:environment');
  const paceConfig = config.pace;
  Pace.start(paceConfig);
}

export default {
  initialize
};
