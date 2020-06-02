"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = exports.MTableToolbar = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _classnames = _interopRequireDefault(require("classnames"));

var _filefy = require("filefy");

var _propTypes = _interopRequireWildcard(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-enable no-unused-vars */
var MTableToolbar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MTableToolbar, _React$Component);

  var _super = _createSuper(MTableToolbar);

  function MTableToolbar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MTableToolbar);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSearchChange", function (searchText) {
      _this.props.dataManager.changeSearchText(searchText);

      _this.setState({
        searchText: searchText
      }, _this.props.onSearchChanged(searchText));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSearchByChange", function (searchBy, searchText) {
      _this.props.dataManager.changeSearchBy(searchBy, searchText);

      _this.setState({
        searchBy: searchBy
      }, _this.onSearchChange(searchText));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultExportCsv", function () {
      var columns = _this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden && columnDef.field && columnDef["export"] !== false;
      }).sort(function (a, b) {
        return a.tableData.columnOrder > b.tableData.columnOrder ? 1 : -1;
      });

      var dataToExport = _this.props.exportAllData ? _this.props.data : _this.props.renderData;
      var data = dataToExport.map(function (rowData) {
        return columns.map(function (columnDef) {
          return _this.props.getFieldValue(rowData, columnDef);
        });
      });
      var builder = new _filefy.CsvBuilder((_this.props.exportFileName || _this.props.title || 'data') + '.csv');
      builder.setDelimeter(_this.props.exportDelimiter).setColumns(columns.map(function (columnDef) {
        return columnDef.title;
      })).addRows(data).exportFile();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "exportCsv", function () {
      if (_this.props.exportCsv) {
        _this.props.exportCsv(_this.props.columns, _this.props.data);
      } else {
        _this.defaultExportCsv();
      }

      _this.setState({
        exportButtonAnchorEl: null
      });
    });
    _this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null,
      searchText: '',
      searchBy: ''
    };
    return _this;
  }

  (0, _createClass2["default"])(MTableToolbar, [{
    key: "renderSearch",
    value: function renderSearch() {
      var _this2 = this;

      var localization = (0, _objectSpread2["default"])({}, MTableToolbar.defaultProps.localization, this.props.localization);

      if (this.props.search) {
        return /*#__PURE__*/React.createElement("div", null, this.props.searchBy ? this.renderSearchBy() : null, /*#__PURE__*/React.createElement(_TextField["default"], {
          autoFocus: this.props.searchAutoFocus,
          className: this.props.searchFieldAlignment === 'left' && this.props.showTitle === false ? null : this.props.classes.searchField,
          value: this.state.searchText,
          onChange: function onChange(event) {
            return _this2.onSearchChange(event.target.value);
          },
          placeholder: localization.searchPlaceholder,
          variant: this.props.searchFieldVariant,
          InputProps: {
            startAdornment: /*#__PURE__*/React.createElement(_InputAdornment["default"], {
              position: "start"
            }, /*#__PURE__*/React.createElement(_Tooltip["default"], {
              title: localization.searchTooltip
            }, /*#__PURE__*/React.createElement(this.props.icons.Search, {
              color: "inherit",
              fontSize: "small"
            }))),
            endAdornment: /*#__PURE__*/React.createElement(_InputAdornment["default"], {
              position: "end"
            }, /*#__PURE__*/React.createElement(_IconButton["default"], {
              disabled: !this.state.searchText,
              onClick: function onClick() {
                return _this2.onSearchChange("");
              }
            }, /*#__PURE__*/React.createElement(this.props.icons.ResetSearch, {
              color: "inherit",
              fontSize: "small"
            }))),
            style: this.props.searchFieldStyle,
            inputProps: {
              'aria-label': "Search"
            }
          }
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderSearchBy",
    value: function renderSearchBy() {
      var _this3 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement(_TextField["default"], {
        select: true,
        label: "Search by: ".concat(this.state.searchBy),
        variant: "filled",
        value: this.state.searchBy,
        onChange: function onChange(event) {
          return _this3.onSearchByChange(event.target.value, _this3.state.searchText);
        },
        className: classes.searchBy
      }, this.props.searchByOptions && this.props.searchByOptions.length ? this.props.searchByOptions.map(function (option) {
        /*#__PURE__*/
        React.createElement("li", {
          key: option
        }, /*#__PURE__*/React.createElement(_MenuItem["default"], {
          value: option
        }, option));
      }) : null);
    }
  }, {
    key: "renderDefaultActions",
    value: function renderDefaultActions() {
      var _this4 = this;

      var localization = (0, _objectSpread2["default"])({}, MTableToolbar.defaultProps.localization, this.props.localization);
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", null, this.props.columnsButton && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_Tooltip["default"], {
        title: localization.showColumnsTitle
      }, /*#__PURE__*/React.createElement(_IconButton["default"], {
        color: "inherit",
        onClick: function onClick(event) {
          return _this4.setState({
            columnsButtonAnchorEl: event.currentTarget
          });
        },
        "aria-label": localization.showColumnsAriaLabel
      }, /*#__PURE__*/React.createElement(this.props.icons.ViewColumn, null))), /*#__PURE__*/React.createElement(_Menu["default"], {
        anchorEl: this.state.columnsButtonAnchorEl,
        open: Boolean(this.state.columnsButtonAnchorEl),
        onClose: function onClose() {
          return _this4.setState({
            columnsButtonAnchorEl: null
          });
        }
      }, /*#__PURE__*/React.createElement(_MenuItem["default"], {
        key: "text",
        disabled: true,
        style: {
          opacity: 1,
          fontWeight: 600,
          fontSize: 12
        }
      }, localization.addRemoveColumns), this.props.columns.map(function (col) {
        return /*#__PURE__*/React.createElement("li", {
          key: col.tableData.id
        }, /*#__PURE__*/React.createElement(_MenuItem["default"], {
          className: classes.formControlLabel,
          component: "label",
          htmlFor: "column-toggle-".concat(col.tableData.id),
          disabled: col.removable === false
        }, /*#__PURE__*/React.createElement(_Checkbox["default"], {
          checked: !col.hidden,
          id: "column-toggle-".concat(col.tableData.id),
          onChange: function onChange() {
            return _this4.props.onColumnsChanged(col, !col.hidden);
          }
        }), /*#__PURE__*/React.createElement("span", null, col.title)));
      }))), this.props.exportButton && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_Tooltip["default"], {
        title: localization.exportTitle
      }, /*#__PURE__*/React.createElement(_IconButton["default"], {
        color: "inherit",
        onClick: function onClick(event) {
          return _this4.setState({
            exportButtonAnchorEl: event.currentTarget
          });
        },
        "aria-label": localization.exportAriaLabel
      }, /*#__PURE__*/React.createElement(this.props.icons.Export, null))), /*#__PURE__*/React.createElement(_Menu["default"], {
        anchorEl: this.state.exportButtonAnchorEl,
        open: Boolean(this.state.exportButtonAnchorEl),
        onClose: function onClose() {
          return _this4.setState({
            exportButtonAnchorEl: null
          });
        }
      }, /*#__PURE__*/React.createElement(_MenuItem["default"], {
        key: "export-csv",
        onClick: this.exportCsv
      }, localization.exportName))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(this.props.components.Actions, {
        actions: this.props.actions && this.props.actions.filter(function (a) {
          return a.position === "toolbar";
        }),
        components: this.props.components
      })));
    }
  }, {
    key: "renderSelectedActions",
    value: function renderSelectedActions() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(this.props.components.Actions, {
        actions: this.props.actions.filter(function (a) {
          return a.position === "toolbarOnSelect";
        }),
        data: this.props.selectedRows,
        components: this.props.components
      }));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var classes = this.props.classes;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.actions
      }, /*#__PURE__*/React.createElement("div", null, this.props.selectedRows && this.props.selectedRows.length > 0 ? this.renderSelectedActions() : this.renderDefaultActions()));
    }
  }, {
    key: "renderToolbarTitle",
    value: function renderToolbarTitle(title) {
      var classes = this.props.classes;
      var toolBarTitle = typeof title === 'string' ? /*#__PURE__*/React.createElement(_Typography["default"], {
        variant: "h6",
        style: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, title) : title;
      return /*#__PURE__*/React.createElement("div", {
        className: classes.title
      }, toolBarTitle);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var localization = (0, _objectSpread2["default"])({}, MTableToolbar.defaultProps.localization, this.props.localization);
      var title = this.props.showTextRowsSelected && this.props.selectedRows && this.props.selectedRows.length > 0 ? localization.nRowsSelected.replace('{0}', this.props.selectedRows.length) : this.props.showTitle ? this.props.title : null;
      return /*#__PURE__*/React.createElement(_Toolbar["default"], {
        className: (0, _classnames["default"])(classes.root, (0, _defineProperty2["default"])({}, classes.highlight, this.props.showTextRowsSelected && this.props.selectedRows && this.props.selectedRows.length > 0))
      }, title && this.renderToolbarTitle(title), this.props.searchFieldAlignment === 'left' && this.renderSearch(), this.props.toolbarButtonAlignment === 'left' && this.renderActions(), /*#__PURE__*/React.createElement("div", {
        className: classes.spacer
      }), this.props.searchFieldAlignment === 'right' && this.renderSearch(), this.props.toolbarButtonAlignment === 'right' && this.renderActions());
    }
  }]);
  return MTableToolbar;
}(React.Component);

exports.MTableToolbar = MTableToolbar;
MTableToolbar.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    addRemoveColumns: 'Add or remove columns',
    nRowsSelected: '{0} row(s) selected',
    showColumnsTitle: 'Show Columns',
    showColumnsAriaLabel: 'Show Columns',
    exportTitle: 'Export',
    exportAriaLabel: 'Export',
    exportName: 'Export as CSV',
    searchTooltip: 'Search',
    searchPlaceholder: 'Search'
  },
  search: true,
  showTitle: true,
  showTextRowsSelected: true,
  toolbarButtonAlignment: 'right',
  searchAutoFocus: false,
  searchFieldAlignment: 'right',
  searchFieldVariant: 'standard',
  selectedRows: [],
  title: 'No Title!'
};
MTableToolbar.propTypes = {
  actions: _propTypes["default"].array,
  classes: _propTypes["default"].object,
  columns: _propTypes["default"].array,
  columnsButton: _propTypes["default"].bool,
  components: _propTypes["default"].object.isRequired,
  data: _propTypes["default"].array,
  dataManager: _propTypes["default"].object.isRequired,
  exportAllData: _propTypes["default"].bool,
  exportButton: _propTypes["default"].bool,
  exportCsv: _propTypes["default"].func,
  exportDelimiter: _propTypes["default"].string,
  exportFileName: _propTypes["default"].string,
  getFieldValue: _propTypes["default"].func.isRequired,
  localization: _propTypes["default"].object.isRequired,
  onColumnsChanged: _propTypes["default"].func.isRequired,
  onSearchChanged: _propTypes["default"].func.isRequired,
  renderData: _propTypes["default"].array,
  search: _propTypes["default"].bool.isRequired,
  searchAutoFocus: _propTypes["default"].bool,
  searchBy: _propTypes["default"].bool,
  searchByOptions: _propTypes["default"].array,
  searchFieldAlignment: _propTypes["default"].string.isRequired,
  searchFieldStyle: _propTypes["default"].object,
  searchFieldVariant: _propTypes["default"].string,
  selectedRows: _propTypes["default"].array,
  showTextRowsSelected: _propTypes["default"].bool.isRequired,
  showTitle: _propTypes["default"].bool.isRequired,
  title: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]),
  toolbarButtonAlignment: _propTypes["default"].string.isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 10%'
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      overflow: 'hidden'
    },
    searchBy: {
      minWidth: 150,
      paddingLeft: theme.spacing(2)
    },
    searchField: {
      minWidth: 150,
      paddingLeft: theme.spacing(2)
    },
    formControlLabel: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  };
};

exports.styles = styles;

var _default = (0, _withStyles["default"])(styles)(MTableToolbar);

exports["default"] = _default;