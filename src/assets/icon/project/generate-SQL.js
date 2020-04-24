import connect from '@base/redux/connect'
import ICON from '../icon'

class GenerateSQL extends ICON {
    config() {
        return {
            viewBox: `0 0 32 32`
        }
    }
    path() {
        return `
            <path d="M-4.77 14.050l-1.41 1.41 2.53 2.54h-6.35v2h6.35l-2.53 2.54 1.41 1.41 4.95-4.95-4.95-4.95z"></path>
            <path d="M12.090 13.7c-0.235-0.106-0.428-0.21-0.614-0.324l0.024 0.014c-0.072-0.048-0.132-0.108-0.179-0.178l-0.001-0.002c-0.038-0.060-0.060-0.133-0.060-0.211 0-0.003 0-0.006 0-0.010v0c-0-0.003-0-0.007-0-0.011 0-0.123 0.054-0.233 0.14-0.308l0-0c0.1-0.076 0.226-0.122 0.363-0.122 0.017 0 0.033 0.001 0.050 0.002l-0.002-0c0.164 0.001 0.322 0.023 0.473 0.063l-0.013-0.003c0.234 0.062 0.43 0.131 0.62 0.211l-0.030-0.011 0.3-0.73c-0.182-0.082-0.401-0.161-0.628-0.223l-0.032-0.007c-0.194-0.051-0.416-0.080-0.645-0.080-0.005 0-0.010 0-0.016 0h0.001c-0.028-0.002-0.061-0.003-0.093-0.003-0.381 0-0.731 0.129-1.010 0.345l0.004-0.003c-0.246 0.21-0.401 0.521-0.401 0.868 0 0.018 0 0.036 0.001 0.054l-0-0.003c-0 0.007-0 0.015-0 0.023 0 0.188 0.044 0.366 0.123 0.523l-0.003-0.007c0.083 0.16 0.19 0.296 0.318 0.409l0.002 0.001c0.176 0.143 0.377 0.267 0.593 0.363l0.017 0.007c0.227 0.103 0.414 0.203 0.594 0.314l-0.024-0.014c0.082 0.055 0.152 0.121 0.208 0.198l0.002 0.002c0.044 0.062 0.070 0.14 0.070 0.223 0 0.002-0 0.005-0 0.007v-0c0 0.005 0 0.011 0 0.017 0 0.136-0.067 0.257-0.169 0.332l-0.001 0.001c-0.121 0.076-0.268 0.121-0.426 0.121-0.015 0-0.031-0-0.046-0.001l0.002 0c-0.204-0.003-0.4-0.032-0.586-0.084l0.016 0.004c-0.297-0.084-0.549-0.179-0.791-0.293l0.031 0.013v0.81c0.353 0.171 0.767 0.27 1.205 0.27 0.016 0 0.032-0 0.047-0l-0.002 0c0.035 0.002 0.076 0.004 0.117 0.004 0.406 0 0.782-0.129 1.089-0.348l-0.006 0.004c0.264-0.211 0.431-0.532 0.431-0.893 0-0.020-0.001-0.040-0.002-0.060l0 0.003c0-0.011 0.001-0.023 0.001-0.036 0-0.262-0.087-0.503-0.233-0.697l0.002 0.003c-0.229-0.234-0.505-0.421-0.814-0.544l-0.016-0.006z"></path>
            <path d="M18 15.34c0.156-0.337 0.247-0.731 0.247-1.147 0-0.068-0.002-0.135-0.007-0.202l0 0.009c0.003-0.049 0.006-0.106 0.006-0.163 0-0.581-0.206-1.115-0.549-1.531l0.003 0.004c-0.363-0.367-0.866-0.595-1.423-0.595-0.048 0-0.096 0.002-0.143 0.005l0.006-0c-0.047-0.004-0.101-0.006-0.156-0.006-0.552 0-1.053 0.224-1.414 0.586v0c-0.357 0.414-0.575 0.957-0.575 1.551 0 0.052 0.002 0.105 0.005 0.156l-0-0.007c-0.004 0.052-0.006 0.112-0.006 0.172 0 0.582 0.206 1.115 0.549 1.532l-0.003-0.004c0.363 0.367 0.866 0.595 1.423 0.595 0.048 0 0.096-0.002 0.143-0.005l-0.006 0h0.070l0.81 1h1.2l-1.070-1.19c0.383-0.144 0.692-0.411 0.886-0.752l0.004-0.008zM16.17 15.52c-0.018 0.001-0.040 0.002-0.062 0.002-0.314 0-0.593-0.144-0.777-0.37l-0.001-0.002c-0.208-0.295-0.332-0.662-0.332-1.058 0-0.032 0.001-0.065 0.002-0.097l-0 0.004c-0.003-0.041-0.005-0.088-0.005-0.136 0-0.365 0.106-0.705 0.289-0.991l-0.004 0.007c0.185-0.233 0.468-0.381 0.786-0.381 0.019 0 0.038 0.001 0.057 0.002l-0.003-0q1.12 0 1.12 1.5t-1.11 1.52z"></path>
            <path d="M20.34 11.82h-0.94v4.43h2.74v-0.78h-1.8v-3.65z"></path>
            <path d="M30 6c0-1.657-1.343-3-3-3v0h-18c-1.657 0-3 1.343-3 3v0 15h-3v4c0 1.657 1.343 3 3 3v0h17c1.657 0 3-1.343 3-3v0-15h4zM7 26h-1c-0.552 0-1-0.448-1-1v0-2h14v2c0 0.001 0 0.003 0 0.004 0 0.357 0.062 0.699 0.177 1.016l-0.007-0.021zM24 25c0 0.552-0.448 1-1 1v0h-1c-0.552 0-1-0.448-1-1v0-4h-13v-15c0-0.552 0.448-1 1-1v0h15v20zM28 8h-2v-3h1c0.552 0 1 0.448 1 1v0z"></path>
        `
    }
}
export default connect(GenerateSQL)