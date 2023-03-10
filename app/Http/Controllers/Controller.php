<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendResponse($message = 'Success getting data.', $data = [], $pagination = [])
    {
        $response = [
            'success' => true,
            'message' => $message,
            'data'    => $data,
            'error' => [
                'error_code' => '',
                'error_data' => [],
            ],
        ];

        if (count($pagination) > 0) {
            $response['pagination'] = $pagination;
        }

        return response()->json($response, 200);
    }

    public function sendError($message, $error_data = new \stdClass, $error_code = 'PROCESS_ERROR', $status_code = 400)
    {
        $response = [
            'success' => false,
            'message' => $message,
            'data' => [],
            'error' => [
                'error_code' => $error_code,
                'error_data' => $error_data,
            ],
        ];


        return response()->json($response, $status_code);
    }
}
