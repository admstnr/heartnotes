import { Actions } from 'flummox';

class EntryActions extends Actions {
  constructor (flux, logger) {
    super();
    this.logger = logger;
  }

  update(entryId, content) {
    this.logger.debug('update', entryId, content.length);

    return {
      id: entryId,
      content: content,
    };
  }

}


class UserActions extends Actions {
  constructor (flux, logger) {
    super();
    this.logger = logger;
  }



  createNewDataFile(password) {
    this.logger.debug('saveNewDataFile', password);

    return {
      password: password
    };
  }



  chooseDataFile () {
    this.logger.debug('chooseDataFile');

    return {};
  }



  openDataFile(filePath, password) {
    this.logger.debug('openDataFile', filePath, password);

    return {
      filePath: filePath,
      password: password
    };
  }


  closeDataFile() {
    this.logger.debug('closeDataFile');

    return {};
  }


  loadEntries () {
    this.logger.debug('load entries');

    return {};
  }

}



module.exports = {
  entry: EntryActions,
  user: UserActions,
};

