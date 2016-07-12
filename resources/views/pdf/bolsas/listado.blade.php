@extends('pdf.pdf')
@section('content')
    <h2>Reporte de bolsa No {{ $bolsa->code }}</h2>
    <ul>
        @foreach($bolsa->shipments as $shipment)
            <li>{{ $shipment->code }}</li>
        @endforeach
    </ul>
@stop