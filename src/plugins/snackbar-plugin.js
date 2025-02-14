import { reactive } from 'vue'

export const snackbarState = reactive({
  visible: false,
  dismissable: false,
  text: '',
  props: {},
})

export default {
  install: (app) => {
    app.config.globalProperties.$displaySnackbar = function ({
      text,
      timeout,
      multiLine,
      dismissable,
      ...props
    }) {
      snackbarState.text = text
      snackbarState.props = props || {}
      snackbarState.dismissable = dismissable
      if (timeout >= 0) snackbarState.props.timeout = timeout
      snackbarState.props.multiLine = multiLine || text.length > 50
      snackbarState.visible = true
    }
  },
}
