//    Copyright 2016 David Lechner, Yoshi Yamaguchi
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
class Custom {
    constructor(author, project, customTermsAndConditions, customTermsAndConditionsFile, customHeader, customHeaderFile, filePath) {
        this.author = author;
        let date = new Date();
        this.year = date.getFullYear().toString();
        this.project = project;
        this.customTermsAndConditions = customTermsAndConditions;
        this.customHeader = customHeader;
        this.filePath = path.parse(filePath);
        if (customTermsAndConditionsFile) {
            this.customHeader = fs.readFileSync(this.evaluateEnvVars(customTermsAndConditionsFile)).toString();
        }
        if (customHeaderFile) {
            this.customHeader = fs.readFileSync(this.evaluateEnvVars(customHeaderFile)).toString();
        }
    }
    evaluateEnvVars(value) {
        if (value == null)
            return '';
        try {
            return value.replace(/\$\{(.*?)\}/g, (source, match) => {
                // support for os environment variables
                Object.keys(process.env).forEach(function (key) {
                    if (key == match)
                        return process.env[key];
                });
                // support for custom variables mapped from vscode.
                switch (match) {
                    case 'workspaceFolder':
                        return vscode.workspace.rootPath;
                    default:
                        return '';
                }
            });
        }
        catch (error) {
            return '';
        }
    }
    replaceVariables(text) {
        text = text.replace(/@AUTHOR@/g, this.author);
        text = text.replace(/@YEAR@/g, this.year);
        text = text.replace(/@PROJECT@/g, this.project);
        text = text.replace(/@FILE@/g, this.filePath.base);
        text = text.replace(/\\n/g, "\n");
        return text;
    }
    termsAndConditions() {
        let template = this.replaceVariables(this.customTermsAndConditions);
        return template;
    }
    header() {
        let template = this.replaceVariables(this.customHeader);
        return template;
    }
    spdxHeader() {
        let licenserSetting = vscode.workspace.getConfiguration("licenser");
        let customSpdxId = licenserSetting.get("customSPDXId", "");
        let template = `Copyright ${new Date().getFullYear().toString()} ${this.author}.
SPDX-License-Identifier: ${customSpdxId}`;
        return template;
    }
}
exports.Custom = Custom;
//# sourceMappingURL=custom.js.map