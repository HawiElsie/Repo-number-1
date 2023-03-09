//    Copyright 2017 Johannes Nordhoff, Yoshi Yamaguchi
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
exports.BUSLv1_1 = void 0;
class BUSLv1_1 {
    constructor(author) {
        this.author = author;
        let date = new Date();
        this.year = date.getFullYear().toString();
    }
    termsAndConditions() {
        let template = `Business Source License 1.1

        Parameters
        
        Licensor:             <Licensor>
        Licensed Work:        <Product>
                              The Licensed Work is (c) <year> <Licensor>
        Additional Use Grant: <None or More>.
        
        Change Date:          <Ideally 3 years from the launch>
        
        Change License:       <change license after BUSL>
        
        For information about alternative licensing arrangements for the Software,
        please visit: <company site>
        
        Notice
        
        License text copyright (c) 2017 MariaDB Corporation Ab, All Rights Reserved.
        “Business Source License” is a trademark of MariaDB Corporation Ab.
        
        -----------------------------------------------------------------------------
        
        Business Source License 1.1

        Terms

        The Licensor hereby grants you the right to copy, modify, create derivative
        works, redistribute, and make non-production use of the Licensed Work. The
        Licensor may make an Additional Use Grant, above, permitting limited
        production use.

        Effective on the Change Date, or the fourth anniversary of the first publicly
        available distribution of a specific version of the Licensed Work under this
        License, whichever comes first, the Licensor hereby grants you rights under
        the terms of the Change License, and the rights granted in the paragraph
        above terminate.

        If your use of the Licensed Work does not comply with the requirements
        currently in effect as described in this License, you must purchase a
        commercial license from the Licensor, its affiliated entities, or authorized
        resellers, or you must refrain from using the Licensed Work.

        All copies of the original and modified Licensed Work, and derivative works
        of the Licensed Work, are subject to this License. This License applies
        separately for each version of the Licensed Work and the Change Date may vary
        for each version of the Licensed Work released by Licensor.

        You must conspicuously display this License on each original or modified copy
        of the Licensed Work. If you receive the Licensed Work in original or
        modified form from a third party, the terms and conditions set forth in this
        License apply to your use of that work.

        Any use of the Licensed Work in violation of this License will automatically
        terminate your rights under this License for the current and all other
        versions of the Licensed Work.

        This License does not grant you any right in any trademark or logo of
        Licensor or its affiliates (provided that you may use a trademark or logo of
        Licensor as expressly required by this License).

        TO THE EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED WORK IS PROVIDED ON
        AN "AS IS" BASIS. LICENSOR HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS,
        EXPRESS OR IMPLIED, INCLUDING (WITHOUT LIMITATION) WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND
        TITLE.

        MariaDB hereby grants you permission to use this License’s text to license
        your works, and to refer to it using the trademark "Business Source License",
        as long as you comply with the Covenants of Licensor below.

        Covenants of Licensor

        In consideration of the right to use this License’s text and the "Business
        Source License" name and trademark, Licensor covenants to MariaDB, and to all
        other recipients of the licensed work to be provided by Licensor:

        1. To specify as the Change License the GPL Version 2.0 or any later version,
        or a license that is compatible with GPL Version 2.0 or a later version,
        where "compatible" means that software provided under the Change License can
        be included in a program with software provided under GPL Version 2.0 or a
        later version. Licensor may specify additional Change Licenses without
        limitation.

        2. To either: (a) specify an additional grant of rights to use that does not
        impose any additional restriction on the right granted in this License, as
        the Additional Use Grant; or (b) insert the text "None".

        3. To specify a Change Date.

        4. Not to modify this License in any other way.`;
        return template;
    }
    header() {
        let template = `Copyright (C)  ${this.year} ${this.author}
Use of this software is govered by the Business Source License included in the LICENSE.TXT file and at www.mariadb.com/bsl11.

Change Date:

On the date above, in accordance with the Business Source License, use of this software will be governed by the open source license specified in the LICENSE.TXT file.`;
        return template;
    }
    spdxHeader() {
        let template = `Copyright ${new Date().getFullYear().toString()} ${this.author}.
SPDX-License-Identifier: BUSL-1.1`;
        return template;
    }
}
exports.BUSLv1_1 = BUSLv1_1;
//# sourceMappingURL=busl1_1.js.map