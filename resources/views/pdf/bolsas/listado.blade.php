@extends('pdf.pdf')
@section('content')
    <h2>TrackHn - Matriz de bolsa No. {{ $bolsa->code }}</h2>
    <span style="width: 300px">{!! DNS2D::getBarcodeHTML($bolsa->code, "QRCODE") !!}</span>
    <table class="windowbg">
        <tr>
            <td colspan="4">
                descripcion:<br>
                {{ $bolsa->details }}
            </td>
        </tr>
        <tr class="titlebg">
            <th colspan="2">Remitente: </th>
            <th  colspan="2">Destinatario: </th>
        </tr>
        <tr class="windowbg">
            <td  colspan="2">
                <span class="resalta">{{ $bolsa->sender->name }}</span>
                <br>
                {{ $bolsa->sender->municipio->departamento->departamento }}, {{ $bolsa->sender->municipio->municipio }}<br>
                {{ $bolsa->sender->address }}
            </td>
            <td  colspan="2">
                <span class="resalta">{{ $bolsa->reciber->name }}</span>
                <br>
                {{ $bolsa->reciber->municipio->departamento->departamento }}, {{ $bolsa->reciber->municipio->municipio }} <br>
                {{ $bolsa->reciber->address }}
            </td>
        </tr>
        <tr class="titlebg">
            <th>No</th>
            <th>Remitente</th>
            <th>Destinatario</th>
            <th>Descripción</th>
        </tr>
        @foreach($bolsa->shipments as $shipment)
        <tr class="windowbg">
            <td>{{ $shipment->code }}</td>
            <td>{{ $shipment->senders->name }}</td>
            <td>{{ $shipment->recivers->name }}</td>
            <td>{{ $shipment->description }}</td>
        </tr>
        @endforeach
    </table>
@stop