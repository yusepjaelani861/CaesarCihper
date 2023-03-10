<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KriptografiController extends Controller
{
    public function caesarEncrypt(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'kunci' => 'required|integer',
            'kata' => 'required|string'
        ], [
            'kunci.required' => 'Kunci harus diisi',
            'kunci.integer' => 'Kunci harus berupa bilangan bulat',
            'kata.required' => 'Kata harus diisi',
            'kata.string' => 'Kata harus berupa string alphabet'
        ]);

        if ($validator->fails()) {
            $this->sendError('Error', $validator->errors(), 'VALIDATION_ERROR', 400);
        }

        $kata = $request->kata;
        $kunci = $request->kunci;
        $hasil = "";
        for ($i = 0; $i < strlen($kata); $i++) {
            $hasil .= chr(ord($kata[$i]) + $kunci);
        }

        return response()->json([
            'hasil' => $hasil
        ]);
    }

    public function caesarDecrypt(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'kunci' => 'required|integer',
            'kata' => 'required|string'
        ], [
            'kunci.required' => 'Kunci harus diisi',
            'kunci.integer' => 'Kunci harus berupa bilangan bulat',
            'kata.required' => 'Kata harus diisi',
            'kata.string' => 'Kata harus berupa string alphabet'
        ]);

        if ($validator->fails()) {
            $this->sendError('Error', $validator->errors(), 'VALIDATION_ERROR', 400);
        }

        $kata = $request->kata;
        $kunci = $request->kunci;
        $hasil = "";
        for ($i = 0; $i < strlen($kata); $i++) {
            $hasil .= chr(ord($kata[$i]) - $kunci);
        }

        return response()->json([
            'hasil' => $hasil
        ]);
    }
}
