/**
 * Validate a namespace string.
 *
 * @param  {string} namespace The namespace to validate.
 *
 * @param {Regex} validation  Namespace validation regex defaults to /^[a-zA-Z][a-zA-Z0-9_.\-]*$/
 *
 * @return {bool}             Whether the namespace is valid.
 */

const defaultRegex = /^[a-zA-Z][a-zA-Z0-9_.\-]*$/;

function validateNamespace( namespace, validationRegex = defaultRegex ) {
	if ( 'string' !== typeof namespace || '' === namespace ) {
		console.error( 'The namespace must be a non-empty string.' );
		return false;
	}

	if ( ! validationRegex.test( namespace ) ) {
		if(validationRegex.toString() === defaultRegex.toString()) {
			console.error( 'The namespace can only contain numbers, letters, dashes, periods and underscores.' );
		} else {
			console.error( 'The namespace does not match supplied validation regex \'' + validationRegex.toString() + '\'.' );
		}
		return false;
	}

	return true;
}

export default validateNamespace;
