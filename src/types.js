import PropTypes from 'prop-types';

const globalWindow = window;

const propTypes = {
  window: PropTypes.object, // DOM window
  columns: PropTypes.array,
  rows: PropTypes.array,
  headerRows: PropTypes.array,
  rowKey: PropTypes.string.isRequired,
  query: PropTypes.object,
  sortingColumns: PropTypes.object,
  headerExtra: PropTypes.any,
  tableWidth: PropTypes.any.isRequired,
  tableHeight: PropTypes.any.isRequired,
  classNames: PropTypes.object,
  props: PropTypes.object,
  styles: PropTypes.object,
  components: PropTypes.object,
  // Custom tree fields
  idField: PropTypes.string,
  parentField: PropTypes.string,
  // Handlers
  onRow: PropTypes.func,
  onMoveRow: PropTypes.func,
  onWidth: PropTypes.func,
  onSelectRow: PropTypes.func
};

const defaultProps = {
  window: globalWindow,
  classNames: {
    table: null,
    header: {
      wrapper: null
      // TODO
      /*
      row: null,
      cell: null
      */
    },
    body: {
      wrapper: null
      // TODO
      /*
      row: null,
      cell: null
      */
    }
  },
  // XXX: push to bindColumns
  props: {
    resize: {
      container: {},
      value: {},
      handle: {}
    },
    sort: {
      container: {},
      value: {},
      order: {}
    }
  },
  components: {},
  // Custom tree fields
  idField: 'id',
  parentField: 'parent',
  // Handlers
  onRow: () => ({}),
  onMoveRow: () => ({}),
  onSelectRow: () => {}
};

export {
  propTypes,
  defaultProps
};
