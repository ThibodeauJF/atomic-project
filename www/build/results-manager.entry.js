import { r as registerInstance, h } from './index-a98b0439.js';

const defaultTemplate = "<style>\n  .field {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  .field-label {\n    font-weight: bold;\n    margin-right: 0.25rem;\n  }\n</style>\n\n<atomic-result-section-visual>\n  <atomic-result-icon class=\"icon\"></atomic-result-icon>\n</atomic-result-section-visual>\n\n<atomic-result-section-title>\n  <atomic-result-link></atomic-result-link>\n</atomic-result-section-title>\n\n<atomic-result-section-excerpt>\n  <!-- Uncomment to enable the sample result component -->\n  <!-- <sample-result-component></sample-result-component> -->\n  <atomic-result-text field=\"excerpt\"></atomic-result-text>\n</atomic-result-section-excerpt>\n\n<atomic-result-section-bottom-metadata>\n  <atomic-result-fields-list>\n    <atomic-field-condition class=\"field\" if-defined=\"author\">\n      <span class=\"field-label\">\n        <atomic-text value=\"author\"></atomic-text>:\n      </span>\n      <atomic-result-text field=\"author\"></atomic-result-text>\n    </atomic-field-condition>\n\n    <atomic-field-condition class=\"field\" if-defined=\"source\">\n      <span class=\"field-label\">\n        <atomic-text value=\"source\"></atomic-text>:\n      </span>\n      <atomic-result-text field=\"source\"></atomic-result-text>\n    </atomic-field-condition>\n\n    <atomic-field-condition class=\"field\" if-defined=\"language\">\n      <span class=\"field-label\">\n        <atomic-text value=\"language\"></atomic-text>:\n      </span>\n      <atomic-result-multi-value-text field=\"language\"></atomic-result-multi-value-text>\n    </atomic-field-condition>\n\n    <atomic-field-condition class=\"field\" if-defined=\"filetype\">\n      <span class=\"field-label\">\n        <atomic-text value=\"fileType\"></atomic-text>:\n      </span>\n      <atomic-result-text field=\"filetype\"></atomic-result-text>\n    </atomic-field-condition>\n\n    <span class=\"field\">\n      <span class=\"field-label\">Date:</span>\n      <atomic-result-date></atomic-result-date>\n    </span>\n  </atomic-result-fields-list>\n</atomic-result-section-bottom-metadata>\n";

let ResultsManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("atomic-result-list", { "fields-to-include": "" }, h("atomic-result-template", null, h("template", { innerHTML: defaultTemplate }))));
  }
};

export { ResultsManager as results_manager };
