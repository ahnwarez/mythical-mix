export const machine = {
  id: 'app',
  initial: 'homePage',
  states: {
    homePage: {
      on: {
        DELETE: 'deleting',
        NAVIGATE_ADD: 'addPersonPage'
      }
    },
    addPersonPage: {
      on: {
        ADD: 'adding'
      }
    },
    adding: {
      invoke: {
        id: 'addPerson',
        src: 'deletePerson',
        onDone: {
          target: 'home'
        },
        onError: {
          target: 'home'
          // TODO handle error
        }
      }
    },
    deleting: {
      invoke: {
        id: 'deletePerson',
        src: 'deletePerson',
        onDone: {
          target: 'home'
        },
        onError: {
          target: 'home'
          // TODO handle error
        }
      }
    },
    shufflePage: {

    }
  }
}
