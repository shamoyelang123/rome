/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {ImportCall, importCall, AnyNode} from '@romejs/js-ast';

export default function ImportCall(generator: Generator, node: AnyNode) {
  node = importCall.assert(node);
  importCall.assert(node);
  generator.word('import');
  generator.token('(');
  generator.print(node.argument, node);
  generator.token(')');
}
