/* globals NSSaveOperation, NSURL */

export default path => (context) => {
  const url = NSURL.fileURLWithPath(path);
  const typeName = 'com.bohemiancoding.sketch.drawing';
  const saveOperation = NSSaveAsOperation;
  const error = null;
  context.document.saveToURL_ofType_forSaveOperation_error(
    url,
    typeName,
    saveOperation,
    error,
  );
};
